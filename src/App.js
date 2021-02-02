import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>

        <MainHeader title="Budjet"/>

        <DisplayBalance size='small' title="Your balance" value="2,550.43"/>

        <DisplayBalances />

        <MainHeader title="History" type="h3" />

        <EntryLine description="Expense" value="$10,00" isExpense={true}/>
        <EntryLine description="Income" value="$100,00"/>

        <MainHeader title="Add new transaction" type="h3" />

        <NewEntryForm />
    </Container>
  );
}

export default App;
