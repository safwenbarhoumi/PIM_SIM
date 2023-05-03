<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          color: "#000000",
          fontSize: 20,
          padding: "10px",
          borderRadius: "15px",
          width: "1000px",
          height: "500px",
          resize: "both",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
          border: "2px solid #ccc",
          backgroundColor: "#f8f8f8",
        }}
        readOnly={notOwner}
      />

      <div>code 1</div>
      <Button
        size="small"
        variant="contained"
        color="#007bff"
        className={classes.runBtn}
        startIcon={<PlayArrowRoundedIcon />}
        onClick={() => {
          setTakeInput(true);
          code1 = code;
          btn = 0;
        }}
        disabled={executing}
      >
        Test
      </Button>

      {buttonVisibility.button1 && (
        <Button
          size="small"
          variant="contained"
          color="#007bff"
          className={classes.runBtn}
          startIcon={<PlayArrowRoundedIcon />}
          onClick={() => {
            setTakeInput(true);
            code1 = code;
            btn = 1;
            handleButtonClick("button1");
          }}
          disabled={executing}
          setButtonVisible={true}
        >
          Run
        </Button>
      )}
    </div>
    <div class="carousel-item" buttonVisible={true}>
      <textarea
        value={code2}
        onChange={(e) => setCode2(e.target.value)}
        style={{
          color: "#000000",
          fontSize: 20,
          padding: "10px",
          borderRadius: "15px",
          width: "1000px",
          height: "500px",
          resize: "both",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
          border: "2px solid #ccc",
          backgroundColor: "#f8f8f8",
        }}
        readOnly={notOwner}
      />
      <div>code 2</div>
      <Button
        size="small"
        variant="contained"
        color="#007bff"
        className={classes.runBtn}
        startIcon={<PlayArrowRoundedIcon />}
        onClick={() => {
          setTakeInput(true);
          code1 = code2;
          btn = 0;
        }}
        disabled={executing}
      >
        Test
      </Button>

      {buttonVisibility.button2 && (
        <Button
          size="small"
          variant="contained"
          color="#007bff"
          className={classes.runBtn}
          startIcon={<PlayArrowRoundedIcon />}
          handleButtonClick2
          onClick={() => {
            setTakeInput(true);
            code1 = code2;
            btn = 1;
            handleButtonClick("button2");
          }}
          disabled={executing}
        >
          Run
        </Button>
      )}
    </div>

    <div class="carousel-item">
      <textarea
        value={code3}
        onChange={(e) => setCode3(e.target.value)}
        style={{
          color: "#000000",
          fontSize: 20,
          padding: "10px",
          borderRadius: "15px",
          width: "1000px",
          height: "500px",
          resize: "both",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
          border: "2px solid #ccc",
          backgroundColor: "#f8f8f8",
        }}
        readOnly={notOwner}
      />

      <div>code 3</div>
      <Button
        size="small"
        variant="contained"
        color="#007bff"
        className={classes.runBtn}
        startIcon={<PlayArrowRoundedIcon />}
        onClick={() => {
          setTakeInput(true);
          code1 = code3;
          btn = 0;
        }}
        disabled={executing}
      >
        Test
      </Button>
      {buttonVisibility.button3 && (
        <Button
          size="small"
          variant="contained"
          color="#007bff"
          className={classes.runBtn}
          startIcon={<PlayArrowRoundedIcon />}
          onClick={() => {
            setTakeInput(true);
            code1 = code3;
            btn = 1;
            handleButtonClick("button3");
          }}
          disabled={executing}
        >
          Run
        </Button>
      )}
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>;














const [codes, setCodes] = useState(Array(numberOfCarousels).fill(""));
const [notOwner, setNotOwner] = useState(false);
const storeAt = "/example";

React.useEffect(() => {
  if (codes.some(code => code.trim() !== "") && !notOwner) {
    codes.forEach((code, index) => {
      firebase
        .database()
        .ref(`${storeAt}/code${index + 1}`)
        .set(code);
    });
  }
}, [codes, notOwner, storeAt]);

const handleCodeChange = (index, value) => {
  const newCodes = [...codes];
  newCodes[index] = value;
  setCodes(newCodes);
};

// Render the carousels and their corresponding code editors and buttons using a loop
return (
  <div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      {codes.map((_, index) => (
        <button
          key={index}
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={index}
          className={index === 0 ? "active" : ""}
          aria-current={index === 0}
          aria-label={`Slide ${index + 1}`}
        />
      ))}
    </div>
    <div className="carousel-inner">
      {codes.map((code, index) => (
        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          <textarea
            value={code}
            onChange={e => handleCodeChange(index, e.target.value)}
            style={{
              color: "#000000",
              fontSize: 20,
              padding: "10px",
              borderRadius: "15px",
              width: "1000px",
              height: "500px",
              resize: "both",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.25)",
              border: "2px solid #ccc",
              backgroundColor: "#f8f8f8",
            }}
            readOnly={notOwner}
          />
          <div>code {index + 1}</div>
          <Button
            size="small"
            variant="contained"
            color="#007bff"
            className={classes.runBtn}
            startIcon={<PlayArrowRoundedIcon />}
            onClick={() => {
              setTakeInput(true);
              handleCodeChange(index, code);
              btn = index;
            }}
            disabled={executing}
          >
            Test
          </Button>
          {buttonVisibility[`button${index + 1}`] && (
            <Button
              size="small"
              variant="contained"
              color="#007bff"
              className={classes.runBtn}
              startIcon={<PlayArrowRoundedIcon />}
              onClick={() => {
                setTakeInput(true);
                handleCodeChange(index, code);
                btn = index;
                handleButtonClick(`button${index + 1}`);
              }}
              disabled={executing}
              setButtonVisible={true}
            >
              Run
            </Button>
          )}
        </div>
      ))}
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden
