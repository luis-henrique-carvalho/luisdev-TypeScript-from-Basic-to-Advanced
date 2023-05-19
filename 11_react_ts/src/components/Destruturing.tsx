import React from "react";

interface Props {
  title: string;
  content: string;
  commentQty: number;
  tags: string[];
}

const Destruturing = ({ title, content, commentQty, tags }: Props) => {
  return <div>
    <h2>{title}</h2>
    <p>{content}</p>
    <p>Quantidade de comentários: {commentQty}</p>
    <div>
        {tags.map((tag)=>(
            <span>#{tag}</span>
        ))}
    </div>
  </div>;
};

export default Destruturing;
