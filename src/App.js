import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useCampaign from "./hooks/useCampain";

function App() {
  const campaignNumber = useCampaign();
  console.log(campaignNumber);

  return (
    <div className="App">
      <Header />
      <main className="mt-10">
        <CreateCampaign />
      </main>
    </div>
  );
}

export default App;
