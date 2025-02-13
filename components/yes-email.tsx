import * as React from "react";

interface YesEmailTemplateProps {
  firstName: string;
}

export const YesEmailTemplate: React.FC<Readonly<YesEmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Yes I will be there</h1>
  </div>
);
