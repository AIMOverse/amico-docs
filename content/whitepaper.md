+++
date = '2025-01-17T22:37:56+08:00'
draft = true
title = 'Whitepaper'
+++

# Whitepaper

## Introduction to Amico

### What is Amico?

Amico is the next-gen Autonomous AI framework & runtime, with a focus on embedded devices and multi-agent systems. Amico natively supports the Solana ecosystem, enabling AI Agents to make autonomously decisions in on-chain actions.

Amico is built on top of the [Rig framework](https://rig.rs), and supports a much more wider range of features, including:

- Autonomous AI runtime for embedded devices
- Multi-agent systems
- Autonomous AI for on-chain actions
- Proof-of-agenthood (PoA) with the power of TEE and consensus mechanisms

### Core Concepts

- **Autonomous AI**: AI agents can make decisions autonomously, without human intervention.
- **Proof-of-agenthood (PoA)**: A consensus mechanism for AI agents, making them verified and trusted.

### Key Features

- **The awareness of real-world environment**
    - Amico natively supports running in embedded devices, giving the agent the ability to detect real-world environment and make decisions based on it.
    - Amico can control its own 'body' to interact with real-world.
- **Autonomous decision making**
    - Amico can make decisions autonomously, without human intervention.
    - **Proof-of-agenthood**: Agents can be verified and trusted, utilizing **Trusted Execution Environments** (TEE) and consensus mechanisms, whether in embedded devices or server-side multi-agent systems.
- **Native web3 support**
    - Amico natively supports the Solana ecosystem. Every agent has its own wallet and can interact with Solana blockchain with autonomous decision making.
    - Amico can also support other web3 ecosystems, such as Ethereum, Solana, BSC, etc.
- **Task-based AI agent runtime**
    - Amico runtime is driven by time-based task scheduling, giving the agent the ability to make decisions for a specific task at a specific time.
    - During each task, Amico acquires the knowledge of real-world events from the Internet, such as social media, news, weather, etc., understanding the events, and making decisions based on both the knowledge acquired and its own knowledge base.
- **Multi-agent consensus mechanism**
    - Autonomous AI Agents communicate with each other, making the agent community more decentralized.
    - For simpler scenarios, partial consensus can be used instead of overall consensus.
    - The consensus mechanisms can be used for the proof of agenthood.

## Architecture Overview
