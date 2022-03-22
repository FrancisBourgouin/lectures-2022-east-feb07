const someFunction = () => {
  const someObject = { a: 1 };

  const show = () => console.log(someObject);

  const add = () => (someObject.a = someObject.a + 1);

  return { show, add };
};

const functions = someFunction();

functions.add();
functions.add();
functions.add();
functions.add();
functions.show();

const doAnAction = (callback) => {
  console.log("Will do the action");
  callback();
  console.log("Done the action");
};

const someFakeComponent = () => {
  const fakeState = { a: "🥔" };
  const changeToFire = () => (fakeState.a = "🔥");

  doAnAction(changeToFire);
};

function ParentComponent(props) {
  const [userInfo, setUserInfo] = useState({ name: "Dylan" });

  const logout = () => setUserInfo(null);
  return (
    <header>
      <h1>Hello!</h1>
      <Profile logout={logout} />
    </header>
  );
}

function TweetForm(props) {
  const [tweetText, setTweetText] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    if (event.target.value.length < 150) {
      setTweetText(event.target.value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.save(tweetText);
  };
  return (
    <form onSubmit={handleSubmit}>
      {error && <h1>ERROR I'M MAD</h1>}
      <textarea onChange={handleChange} value={tweetText} />
    </form>
  );
}
