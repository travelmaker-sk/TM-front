import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../styles/palette";
import {
  CyanButtonStyle,
  GrayButtonStyle,
  SelectButtonStyle,
} from "../../styles/ButtonStyle";

type FindPwFinProps = {
  reSubmit: React.FormEventHandler<HTMLFormElement>;
};

const FindPwFinBlock = styled.div`
  .material-icons {
    display: block;
    margin-bottom: 52px;
    font-size: 32px;
    text-align: center;
    color: ${palette.gray[5]};
  }
  h2 {
    margin-bottom: 26px;
    font-size: 24px;
    text-align: center;
    b {
      font-weight: 600;
    }
  }
  h3 {
    display: block;
    margin-bottom: 104px;
    text-align: center;
    .resubmit-btn {
      margin: 0 0 0 5px;
      padding: 0;
      cursor: pointer;
      a {
        font-size: 16px;
        color: ${palette.cyan[5]};
        &:hover {
          color: ${palette.cyan[4]};
        }
      }
    }
  }
`;

const FindPwFin = ({ reSubmit }: FindPwFinProps) => {
  return (
    <FindPwFinBlock>
      <div className="material-icons">mail_outline</div>
      <h2>
        <b>이메일 인증 코드</b>가 발송되었습니다.
      </h2>
      <h3>
        이메일이 도착하지 않았나요?
        <button className="resubmit-btn">
          <Link
            to="/findPwFin"
            // onClick={reSubmit}
          >
            재전송
          </Link>
        </button>
      </h3>
      <SelectButtonStyle>
        <CyanButtonStyle>
          <button>
            <Link to="/login">로그인 페이지로 이동</Link>
          </button>
        </CyanButtonStyle>
        <GrayButtonStyle>
          <button>
            <Link to="/">메인 페이지로 이동</Link>
          </button>
        </GrayButtonStyle>
      </SelectButtonStyle>
    </FindPwFinBlock>
  );
};

export default FindPwFin;
