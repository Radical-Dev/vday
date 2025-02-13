import * as React from "react";

interface YesEmailTemplateProps {
  response: string;
}

export const YesEmailTemplate: React.FC<Readonly<YesEmailTemplateProps>> = ({
  response,
}) => (
  <div>
    <h1>Valentine's Date</h1>
    <div>Response: {response}</div>
    <h2>Things to pack:</h2>
    <ul>
      <li>Your Beautiful smile</li>
      <li>Your Stunning body</li>
      <li>Your intoxicating energy</li>
      <li>Your effortless radiance</li>
      <li>Your captivating charm</li>
      <li>My everything</li>
    </ul>
    <p>See you on Friday, Tightole</p>
  </div>
);
