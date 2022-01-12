import Link from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement } from 'react';

export function ActiveLink ({children, ...rest}) {
  const { asPath } = useRouter();

  let isActive = false

  if (asPath === rest.href || asPath === rest.as) {
    isActive = true;
  }

  return(
    <Link { ...rest}>
      {cloneElement(children, {
        color: isActive ? "#1DA1F1" : "#111111"
      })}
    </Link>
  )
}