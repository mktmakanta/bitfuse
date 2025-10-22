"use client";

import React, { useState, useEffect } from "react";
import { Zap, Shield, Globe, ChevronRight, Menu, X } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Sponsors from "@/components/Sponsors";

export default function Web3LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 via-black to-cyan-900/20"></div>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>
      </div>
      <NavBar />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-semibold animate-pulse">
              🚀 The Future of Decentralization
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Powering the Next
            </span>
            <br />
            <span className="bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Generation of Decentralized Innovation
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto">
            BitFuse is a Web3-powered platform connecting people, assets, and
            ideas in a trustless ecosystem - where ownership, transparency, and
            freedom fuse together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-linear-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-2 group">
              <span>Launch App</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 border border-purple-500/50 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Explore Docs
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "$2.5B+", label: "Total Value Locked" },
              { value: "150K+", label: "Active Users" },
              { value: "50M+", label: "Transactions" },
              { value: "99.9%", label: "Uptime" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-linear-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-xl hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Sponsors />

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* === Text Section (Left) === */}
            <div className="order-2 lg:order-1">
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4 inline mr-2" />
                DeFi Infrastructure
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Secure & Scalable DeFi Solutions
              </h2>

              <p className="text-xl text-gray-400 mb-8">
                Build decentralized finance applications with enterprise-grade
                security and lightning-fast transaction speeds.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Cross-Chain Swaps",
                    desc: "Seamlessly trade assets across multiple blockchains",
                  },
                  {
                    title: "Liquidity Pools",
                    desc: "Earn yields with automated market makers",
                  },
                  {
                    title: "Smart Yield",
                    desc: "Optimize returns with AI-powered strategies",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-linear-to-r from-purple-500/5 to-transparent rounded-lg hover:from-purple-500/10 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-1 lg:order-2 flex items-center justify-center">
              <div className="aspect-square bg-linear-to-r from-purple-600/10 to-cyan-600/10 rounded-2xl border border-purple-500/30 p-8 backdrop-blur-sm">
                <div className="w-full h-full bg-linear-to-r from-purple-500/10 to-cyan-500/10 rounded-xl flex items-center justify-center">
                  <img
                    src="/images/security-lock.png"
                    alt="Blockchain Network Illustration"
                    className="w-full h-auto object-contain drop-shadow-[0_0_40px_rgba(88,101,242,0.4)]"
                  />
                </div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative flex justify-center">
              <div className="aspect-square bg-linear-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl border border-cyan-500/30 p-8 backdrop-blur-sm">
                <div className="w-full h-auto bg-linear-to-r from-cyan-500/10 to-purple-500/10 rounded-xl flex items-center justify-center">
                  <img
                    src="/images/api-nodes.png"
                    alt="api nodes visualization"
                    className="w-full h-auto  object-contain drop-shadow-[0_0_40px_rgba(88,101,242,0.4)]"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-sm font-semibold mb-6">
                <Zap className="w-4 h-4 inline mr-2" />
                Developer Tools
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Build Faster with Powerful APIs
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Complete suite of developer tools, SDKs, and APIs to accelerate
                your Web3 development journey.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "REST & GraphQL APIs",
                    desc: "Access blockchain data with simple API calls",
                  },
                  {
                    title: "Smart Contract SDK",
                    desc: "Deploy and manage contracts with ease",
                  },
                  {
                    title: "Real-time WebSockets",
                    desc: "Stream blockchain events instantly",
                  },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 p-4 bg-linear-to-r from-cyan-500/5 to-transparent rounded-lg hover:from-cyan-500/10 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
