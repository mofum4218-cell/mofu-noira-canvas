"use client";

import React from "react";
import org from "@/config/org/org.json";

const Terms: React.FC = () => {
  return (
    <section style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>利用規約</h2>

      <p style={{ marginBottom: "1rem" }}>
        本ウェブサイト（以下「当サイト」といいます）は、{org.companyName}（代表：{org.representative}）が運営しています。
        以下の利用規約をお読みいただき、同意の上ご利用ください。
      </p>

      <dl style={{ lineHeight: "1.8", marginBottom: "2rem" }}>
        <dt>第1条（適用）</dt>
        <dd>
          本規約は、当サイトの利用に関する一切の関係に適用されます。
        </dd>

        <dt>第2条（禁止事項）</dt>
        <dd>
          利用者は以下の行為をしてはなりません：
          <ul>
            <li>法令または公序良俗に反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>本サイトの運営を妨害する行為</li>
            <li>無断転載・複製・改変</li>
          </ul>
        </dd>

        <dt>第3条（著作権）</dt>
        <dd>
          当サイトに掲載されている文章・画像等の著作物は、{org.companyName}に帰属します。無断転載を禁止します。
        </dd>

        <dt>第4条（免責事項）</dt>
        <dd>
          当サイトの内容について正確性・完全性を保証するものではありません。
          利用により発生したいかなる損害にも責任を負いません。
        </dd>

        <dt>第5条（サービスの変更・停止）</dt>
        <dd>
          運営者は予告なく当サイトの内容変更・停止を行うことがあります。
        </dd>

        <dt>第6条（準拠法・管轄）</dt>
        <dd>
          本規約は日本法に準拠します。
          また、当サイトに関するすべての紛争については、運営者の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
        </dd>
      </dl>

      <p style={{ fontSize: "0.9rem", color: "#555" }}>
        制定日：{org.established}
      </p>
    </section>
  );
};

export default Terms;

