import IncomeInput from "./containers/IncomeInput/IncomeInput";
import ExpenseInput from "./containers/ExpenseInput/ExpenseInput";
import ExpenseList from "./containers/ExpenseList/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal/ExpenseTotal";

function App() {
  return (
    <article>
      <header>
        {/* 사용자의 한달 월급을 입력합니다. */}
        <h2>수입 input</h2>
        <IncomeInput />
      </header>
      <main>
        {/* 사용자가 구입한 상품의 이름과 가격을 입력합니다. */}
        <h2>지출 input</h2>
        <ExpenseInput />
        <div>
          {/* 사용자가 그동한 구입한 상품의 목록이 랜더링됩니다. */}
          <h2>지출 기록</h2>
          <ExpenseList />
          <div>
            {/* 사용자가 구입한 상품의 지출액의 총합 */}
            <h2>지출 총합</h2>
            <ExpenseTotal />
          </div>
        </div>
      </main>
    </article>
  );
}
export default App;