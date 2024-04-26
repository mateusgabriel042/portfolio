import React from "react";

import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
  size?: 'small' | 'title' | 'subtitle' | 'normal' | 'text' | 'label' | 'paragraph';
  className?: string;
  id?: string;
  title?: string;
}

export default function Heading({
  size = "normal",
  children,
  className,
  id = '',
  title = '',
}: Props) {
  //let className = '';

  switch (size) {
    case 'small':
      className = className + " " + styles.small
      break;
    case 'title':
      className = className + " " + styles.title
      break;
    case 'subtitle':
      className = className + " " + styles.subtitle
      break;
    case 'normal':
      className = className + " " + styles.normal
      break;
    case 'text':
      className = className + " " + styles.text
      break;
    case 'label':
      className = className + " " + styles.label
      break;
    case 'paragraph':
      className = className + " " + styles.paragraph
      break;
    default:
      className = className + " " + styles.normal
      break;
  }
  if (size) {

  }

  return (
    <div
      className={className}
      id={id}
      title={title}
    >{children}</div>
  );
}