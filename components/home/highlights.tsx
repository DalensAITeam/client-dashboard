import { highlights } from "@/constants/home";
import Heading from "./elements/heading";
import HighlightComponent from "./elements/highlightComponent";

const Hightlights = () => {
  return (
    <div>
      <Heading id={2} title="Highlights" />
      <div className="flex flex-col gap-[40px]">
        {highlights.map((props) => (
          <HighlightComponent {...props} key={props.src} />
        ))}
      </div>
    </div>
  );
};

export default Hightlights;
