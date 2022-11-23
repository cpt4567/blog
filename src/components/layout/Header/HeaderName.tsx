interface Props {
  disabled: boolean;
}

export function HeaderName({ disabled }: Props) {
  if (!disabled) {
    return (
      <div className="head">
        <div className="head_in">
          <h1>
            <span>캠핑장이름</span>
          </h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="head">
        <div className="head_in">
          <h1>
            <img src="../../../asset/images/logo.png" title="Thank Q Camping" />
            <span className="skip_text">Thank Q Camping</span>
          </h1>
        </div>
      </div>
    );
  }
}
