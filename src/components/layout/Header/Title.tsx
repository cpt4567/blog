import Head from 'next/head';
interface Props {
  disabled?: boolean;
  title: string;
}

/**
 * html의 title 영역을 담당하는 함수
 * @param param0 페이지당 title 받아서 올려줌
 * @returns
 */
export default function Seo({ disabled, title }: Props) {
  return <Head>{disabled ? <title>땡큐캠핑 | {title}</title> : <title>{title}</title>}</Head>;
}
