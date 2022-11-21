import Head from 'next/head';

/**
 * html의 title 영역을 담당하는 함수
 * @param param0 페이지당 title 받아서 올려줌
 * @returns
 */
export default function Title({ title }: { title: string }) {
  return (
    <Head>
      <title>땡큐캠핑 | {title}</title>
    </Head>
  );
}
