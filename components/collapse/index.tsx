import { useState } from "react";
import { IconChevronUp } from "../../assets";

interface CollapseType {
  title?: string;
  content?: any;
  className?: any;
}

const Index = (props: CollapseType) => {
  const { title, content, className } = props;
  const [expand, setExpand] = useState(false);

  const onExpandHandler = () => {
    setExpand(!expand);
  };

  return (
    <div
      className={`${className} flex flex-col p-6 border border-black-30 rounded-10`}
    >
      <div className="flex flex-row justify-between">
        <div className="prose-large-medium">{title}</div>
        <div aria-hidden="true" onClick={onExpandHandler}>
          <IconChevronUp
            className={`transform duration-300 ${
              expand ? "rotate-0" : "rotate-180"
            }`}
          />
        </div>
      </div>
      <div
        className={`prose-normal-regular transition-all text-black-60 duration-300 ease-in-out overflow-hidden max-h-0 opacity-0 mt-0 ${
          expand ? "max-h-screen opacity-100 mt-3" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Index;
