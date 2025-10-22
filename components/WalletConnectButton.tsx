"use client";
import { useContext } from "react";
import { WalletContext } from "@/context/MetaMaskContext";

export default function WalletConnectButton() {
  const { address, connect, disconnect } = useContext(WalletContext);

  return (
    <button
      onClick={address ? disconnect : connect}
      className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-medium transition-all duration-300"
    >
      {address
        ? `${address.slice(0, 6)}...${address.slice(-4)}`
        : "Connect Wallet"}
    </button>
  );
}
