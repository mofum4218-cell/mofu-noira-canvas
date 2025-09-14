"use client";

import React from "react";
import org from "@/config/org/org.json";
import { useRouter } from "next/navigation";

const Privacy: React.FC = () => {
      const router = useRouter();
  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
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
        プライバシーポリシー
      </h2>

      <p style={{ marginBottom: "1rem" }}>
        {org.companyName}（以下「当社」といいます）は、本ウェブサイトにおける利用者のプライバシーの保護に最大限の注意を払っています。
        以下に当社のプライバシーポリシーを定めます。
      </p>

      <dl style={{ lineHeight: "1.8", marginBottom: "2rem" }}>
        <dt>1. 個人情報の取得</dt>
        <dd>
          当社は、適正かつ公正な手段によって、ユーザーから必要な範囲の個人情報を取得します。
        </dd>

        <dt>2. 個人情報の利用目的</dt>
        <dd>
          取得した個人情報は、お問い合わせ対応、サービス提供、マーケティング活動などに利用されます。
        </dd>

        <dt>3. 第三者提供の禁止</dt>
        <dd>
          ご本人の同意がある場合または法令に基づく場合を除き、第三者に個人情報を提供することはありません。
        </dd>

        <dt>4. 安全管理</dt>
        <dd>
          個人情報の漏洩、紛失、改ざん等を防ぐため、適切なセキュリティ対策を実施します。
        </dd>

        <dt>5. 開示・訂正・削除の請求</dt>
        <dd>
          ご本人より個人情報の開示・訂正・削除の申し出があった場合は、適切に対応いたします。
        </dd>

        <dt>6. プライバシーポリシーの変更</dt>
        <dd>
          本ポリシーは予告なく変更される場合があります。変更後の内容は本ページにて掲載いたします。
        </dd>

        <dt>7. お問い合わせ</dt>
        <dd>
          本ポリシーに関するお問い合わせは、下記メールアドレス宛にお願いいたします。<br />
          メール: {org.email}
        </dd>
      </dl>

      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        制定日：{org.established}
      </p>
    </section>
  );
};

export default Privacy;

