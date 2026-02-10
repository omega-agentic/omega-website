import type { Metadata } from "next";
import { ChatEmbed } from "./ChatEmbed";

export const metadata: Metadata = {
  title: "Omega Chat — AI Assistant",
  description:
    "Chat with Omega's AI assistant. Powered by Open WebUI.",
};

export default function ChatPage() {
  return <ChatEmbed />;
}
