import { useCallback, useEffect, useRef, useState } from "react";
import "./FeedingStatus.css";

const FeedingStatus = () => {
  const [range, setRange] = useState(70);

  console.log(setRange);

  const clipPathFNStart = useCallback((range) => {
    const actualHeight = 100 - range;
    return `0% ${actualHeight}%,10% ${actualHeight + 2}%,20% ${
      actualHeight - 2
    }%,30% ${actualHeight - 5}%,40% ${actualHeight + 2}%,50% ${
      actualHeight + 5
    }%,60% ${actualHeight + 2}%,70% ${actualHeight + 3}%,80% ${
      actualHeight - 5
    }%,100% ${actualHeight}%,
      100% 100%,
      0% 100%`;
  }, []);
  const clipPathFNEnd = useCallback((range) => {
    const actualHeight = 100 - range;
    return `0% ${actualHeight}%,10% ${actualHeight - 2}%,20% ${
      actualHeight + 2
    }%,30% ${actualHeight + 5}%,40% ${actualHeight - 2}%,50% ${
      actualHeight - 5
    }%,60% ${actualHeight - 2}%,70% ${actualHeight - 3}%,80% ${
      actualHeight + 5
    }%,100% ${actualHeight}%,
      100% 100%,
      0% 100%`;
  }, []);

  const devRef = useRef();

  useEffect(() => {
    devRef?.current?.style.setProperty(
      "--clipPathStart",
      `${clipPathFNStart(range)}`
    );
    devRef?.current?.style.setProperty(
      "--clipPathEnd",
      `${clipPathFNEnd(range)}`
    );
  }, [clipPathFNEnd, clipPathFNStart, range]);
  return (
    <div className="GeneralFeeding">
      <h2>General Feeding Status</h2>
      <div className="cirlce">
        <p ref={devRef}></p>
        <span>{range}%</span>
      </div>
      <div className="warning">
        <img src="/warning.png" alt="warning" />
        <p> :Animal Not Feeding</p>
      </div>
    </div>
  );
};

export default FeedingStatus;
