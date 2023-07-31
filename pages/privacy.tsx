import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const H2 = ({ children }: { children: any }) => {
  return (
    <h2 className="text-3xl font-bold mt-2 mb-1">{children}</h2>
  )
}

const Ol = ({ children }: { children: any }) => {
  return (
    <ol className="list-decimal pl-6">{children}</ol>
  )
}

const Privacy: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center py-2">
      <Head>
        <title>{`プライバシーポリシー｜{process.env.NEXT_PUBLIC_SERVICE_NAME}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col justify-center px-20">
        <h1 className="text-4xl font-bold text-center">
          <a className="text-blue-600" href="#">
            プライバシーポリシー
          </a>
        </h1>
        <div className="mt-8">
          <p>{process.env.NEXT_PUBLIC_SERVICE_NAME}チーム（以下、「私たち」といいます。）は、提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。</p>
          <H2>第1条（個人情報）</H2>
          <p>「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。</p>
          <H2>第2条（個人情報の収集方法）</H2>
          <p>私たちは、ユーザーが利用登録をする際に氏名、生年月日、メールアドレス、などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、私たちの提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。</p>
          <H2>第3条（個人情報を収集・利用する目的）</H2>
          <p>私たちが個人情報を収集・利用する目的は、以下のとおりです。</p>
          <Ol>
            <li>私たちサービスの提供・運営のため</li>
            <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
            <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
            <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
            <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
            <li>上記の利用目的に付随する目的</li>
          </Ol>
          <H2>第4条（利用目的の変更）</H2>
          <Ol>
            <li>私たちは、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
            <li>利用目的の変更を行った場合には、変更後の目的について、私たち所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
          </Ol>
          <H2>第5条（個人情報の利用停止等）</H2>
          <p>私たちは、本人から、個人情報が、利用目的の範囲を超えて取り扱われているという理由、または不正の手段により取得されたものであるという理由により、その利用の停止または消去（以下、「利用停止等」といいます。）を求められた場合には、遅滞なく必要な調査を行います。</p>
          <H2>第6条（プライバシーポリシーの変更）</H2>
          <Ol>
            <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
            <li>私たちが別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
          </Ol>
        </div>
      </main>
    </div>
  )
}

export default Privacy