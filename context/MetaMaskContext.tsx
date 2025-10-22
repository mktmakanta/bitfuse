"use client";
import React, { createContext, useEffect, useState } from "react";
import MetaMaskSDK from "@metamask/sdk";
import { ethers } from "ethers";

interface WalletContextProps {
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  provider: ethers.BrowserProvider | null;
}

export const WalletContext = createContext<WalletContextProps>({
  address: null,
  connect: async () => {},
  disconnect: () => {},
  provider: null,
});

export const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [sdk, setSdk] = useState<MetaMaskSDK | null>(null);

  useEffect(() => {
    const MMSDK = new MetaMaskSDK({
      dappMetadata: {
        name: "BITFUSE",
        url: window.location.href,
      },
      checkInstallationImmediately: false,
      enableAnalytics: false,
    });
    setSdk(MMSDK);
  }, []);

  const connect = async () => {
    try {
      const ethereum = sdk?.getProvider();
      if (!ethereum) throw new Error("MetaMask provider not available");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setProvider(new ethers.BrowserProvider(ethereum));
    } catch (err) {
      console.error("Connection failed:", err);
    }
  };

  const disconnect = () => {
    setAddress(null);
    setProvider(null);
  };

  return (
    <WalletContext.Provider value={{ address, connect, disconnect, provider }}>
      {children}
    </WalletContext.Provider>
  );
};
