"use client";

import React from "react";
import { useRouter } from "next/navigation";
import org from "@/config/org/org.json";

const Legal: React.FC = () => {
  const router = useRouter();

  return (
    <section
      style={{
        position: "relative",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
      }}
    >
      {/* 閉じるボタン */}
      <button
        onClick={() => router.push("/")}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          background: "transparent",
          border: "none",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        aria-label="閉じる"
        title="閉じる"
      >
        ×
      </button>

      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>
        特定商取引法に基づく表記
      </h2>

      <dl style={{ lineHeight: "1.8", marginBottom: "2rem" }}>
        <dt>販売事業者名</dt>
        <dd>{org.companyName}</dd>

        <dt>代表者</dt>
        <dd>{org.representative}</dd>

        <dt>所在地</dt>
        <dd>{org.address}</dd>

        <dt>メールアドレス</dt>
        <dd>{org.email}</dd>

        <dt>販売価格</dt>
        <dd>商品ごとに表示（消費税は内税として表示）</dd>

        <dt>商品代金以外の必要料金</dt>
        <dd>振込手数料・通信費等はお客様のご負担となります</dd>

        <dt>代金の支払時期</dt>
        <dd>注文時または請求書に記載の期日までにお支払い</dd>

        <dt>お支払方法</dt>
        <dd>クレジットカード / 銀行振込 / その他電子決済</dd>

        <dt>商品引渡し時期</dt>
        <dd>ご入金確認後、速やかに提供（または各商品説明に記載）</dd>

        <dt>返品・キャンセルについて</dt>
        <dd>
          デジタル商品につき返品・キャンセルはお受けしておりません。
          不具合等がある場合はお問い合わせください。
        </dd>
      </dl>

      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        ※上記は特定商取引法に基づく記載例です。商品・サービス内容に応じて適切に変更してください。
      </p>
    </section>
  );
};

export default Legal;

