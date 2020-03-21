import styled from "styled-components";

export const Background = styled.div`
  margin: 0 0;
  background-color: #2f324a;
  background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/798fc33f-5338-426c-95ef-0dce36f68da0/d758mbq-3e6c2f7d-9887-4049-b362-a37dc3f28c70.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc5OGZjMzNmLTUzMzgtNDI2Yy05NWVmLTBkY2UzNmY2OGRhMFwvZDc1OG1icS0zZTZjMmY3ZC05ODg3LTQwNDktYjM2Mi1hMzdkYzNmMjhjNzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J-2AV3qR5pGMAtZlOz6eChHaRGLslojhuYczoNAHi2w");
  background-repeat: no-repeat;
  background-position: 50% 0;
`;

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left
  background-color: #e9eaec;
  width: 625px;
  .banner-img{
    width: 626px;
    height: 325px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWarpper = styled.div`
  overflow: hidden;
  padding: 5px 0 10px 0;
  margin-left: -10px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 30px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  cursor: pointer;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 10px;
  border-bottom: 1px solid #dcdcdc;
  position: relative;

  .pic {
    display: block;
    width: 105px;
    height: 100px;
    float: right;
    border-radius: 10px;
    padding: 5.5px 0;
  }
`;

export const News = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  padding: 4px;
  background: red;
  text-align: center;
  color: white;
  cursor: default;
`;

export const ListInfo = styled.div`
  width: 480px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 20px;
    margin: 9px 0;
    font-weight: bolder;
    color: #333;
    &:hover {
      color: red;
    }
  }
  .disc {
    line-height: 24px;
    font-size: 14px;
    color: #72707d;
    text-align: justify;
  }
`;

export const RecommendWrapper = styled.div`
  width: 280px;
  padding-top: 10px;
  background-color: white;
`;

export const RecommendTitle = styled.div`
  text-align: center;
  color: white;
  background-color: red;
  width: 230px;
  margin: 10px auto 20px;
  line-height: 30px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const RecommendBody = styled.div`
  padding-bottom: 0px;
  & div {
    border-top: 1px solid #eee;
    padding: 10px 15px 5px 15px;
    color: black;
    line-height: 20px;
    font-size: 16px;
  }
  & input {
    display: block;
    margin: 20px auto 10px;
    width: 230px;
    height: 28px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  & button {
    background-color: #555555;
    border: none;
    color: white;
    width: 280px;
    padding: 10px 0 10px 0;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
  }
  & p {
    font-size: 10px;
    padding: 0px 5px 0px 5px;
    color: #666;
    margin: 0 auto;
  }
`;

export const RecommendItem = styled.div`
  height: 50px;
  width: 280px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;
export const WriterWrapper = styled.div`
  width: 280px;
  box-sizing: border-box;
  margin: 40px auto;
  border-radius: 5px;
  height: 300px;
  align-items: center;
`;

export const WriterTitle = styled.div`
  background: #dc191b;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 600;
  font-family: "Open Sans", Arial, sans-serif;
  height: 22px;
  line-height: 22px;
  margin-bottom: 2px;
`;

export const WriterBody = styled.div`
  background: #eee;
  cursor: pointer;
  & h3 {
    margin: 0px;
  }
`;

export const LoadWrap = styled.div`
  width: 100%
  height: 40px;
  padding: 20px 0 20px 0;
  background-color: #2F324A;
`;

export const LoadMore = styled.div`
  width: 50%
  height: 40px;
  margin:auto;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  background-color: red;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 40px;
  height: 30px;
  background: #27ae60;
  color: white;
  border-radius: 20px;
  line-height: 40px;
  text-align: center;
  font-weight: bolder;
  font-size: 40px;
`;
