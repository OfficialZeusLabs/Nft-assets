"use client";
import { Provider } from "react-redux";
import store from "@/store";
import { poppins } from "@/fonts/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <body className={`${poppins.className}`}>{children}</body>
    </Provider>
  );
}
