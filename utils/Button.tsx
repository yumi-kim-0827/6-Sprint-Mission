import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Board.module.css';

interface LinkButtonProps {
  children: React.ReactNode;
  href?: string;
}

export default function LinkButton({ children, href = '/' }: LinkButtonProps) {
  return (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  );
}
