import React from "react";
import { useWallet } from "@txnlab/use-wallet";
import Button from "./Button";

export default function Connect() {
    const { providers, activeAccount } = useWallet();

    // Map through the providers.
    // Render account information and "connect", "set active", and "disconnect" buttons.
    // Finally, map through the `accounts` property to render a dropdown for each connected account.
    return (
        <div>
            {providers?.map((provider) => (
                <div key={"provider-" + provider.metadata.id}>
                    <h4>
                        <img width={30} height={30} alt="" src={provider.metadata.icon} />
                        {provider.metadata.name} {provider.isActive && "[active]"}
                    </h4>
                    <div>
                        {!provider.isConnected && (
                            <Button label="Connect" onClick={provider.connect} disabled={provider.isConnected} />
                        )}
                        {provider.isConnected && (
                            <Button label="Disconnect" onClick={provider.disconnect} disabled={!provider.isConnected} />
                        )}
                        {!provider.isActive && (
                            <Button
                                label="Set Active"
                                onClick={provider.setActiveProvider}
                                disabled={!provider.isConnected || provider.isActive}
                            />
                        )}

                        <div>
                            {provider.isActive && provider.accounts.length && (
                                <select
                                    value={activeAccount?.address}
                                    onChange={(e) => provider.setActiveAccount(e.target.value)}
                                >
                                    {provider.accounts.map((account) => (
                                        <option key={account.address} value={account.address}>
                                            {account.address}
                                        </option>
                                    ))}
                                </select>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
