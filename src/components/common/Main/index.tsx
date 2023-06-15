import { useEffect, useState } from "react";
import RecipeCard from "../RecipeCard";
import { Link } from "react-router-dom";
import DummyData from "@/store/DummyData";
import {
  Container,
  Top,
  MainBody,
  PageNationWrap,
  PageNation,
  PageNationButton,
} from "./styled";

const Main = () => {
  const [pagePos, setPagePos] = useState<number>(1);
  const [pageNation, setPageNation] = useState<number[]>([]);
  useEffect(() => {
    let temp;
    DummyData.length % 15 == 0
      ? (temp = [...Array(Math.floor(DummyData.length / 15))])
      : (temp = [...Array(Math.floor(DummyData.length / 15 + 1))]);

    temp = temp.map((_, index) => index + 1);
    temp.push(-1);
    setPageNation(temp);
  }, []);

  const pagePosEvent = (i: number) => {
    if (i === -1) {
      if (pagePos + 1 < DummyData.length / 15 + 1.01) {
        setPagePos(pagePos + 1);
      }
    } else {
      setPagePos(i);
    }
  };

  return (
    <Container>
      <Top>
        An assortment of {DummyData.length} exquisite recipes awaits you
      </Top>
      <MainBody>
        {DummyData.filter(
          (_, i) => 15 * (pagePos - 1) <= i && i < 15 * pagePos
        ).map((item, i) => (
          <Link to="/detail">
            <RecipeCard key={i} data={item} />
          </Link>
        ))}
      </MainBody>
      <PageNationWrap>
        <PageNation>
          {pageNation.map((i) => (
            <PageNationButton
              key={i}
              isActive={pagePos === i}
              onClick={() => pagePosEvent(i)}
            >
              {i == -1 ? ">" : i}
            </PageNationButton>
          ))}
        </PageNation>
      </PageNationWrap>
    </Container>
  );
};

export default Main;
