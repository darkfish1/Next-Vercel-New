import { useRouter } from "next/router";

import Link from "next/link";
import { CSSProperties, FC, ReactNode } from "react";

const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline'
}

type ActiveLinkProps = {
    text: ReactNode;
    href: string;
  };

export const ActiveLink: FC<ActiveLinkProps> = ({ text, href }) => {
 
        const {asPath}  =  useRouter();

        return (
            <Link href={href}>
                <span style={ asPath === href ? style: undefined }>{text}</span>
            </Link>
        );
};
