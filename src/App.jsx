import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import MainContainer from './components/MainContainer.jsx'

function App() {
   const expenses = [
    {
      id: 1,
      grocery: '1000',
      electricity: '2500',
      total: 3500
    },
    {
      id: 2,
      grocery: '800',
      electricity: '500',
      total: 1300
    },
    // {
    //   id: 3,
    //   grocery: '500',
    //   electricity: '2500'
    // },
    // {
    //   id: 4,
    //   grocery: '2000',
    //   electricity: '2500'
    // },
   ]

   const MyExpensesList = expenses.map(
    (expense) => <MainContainer key={expense.id} grocery={expense.grocery} electricity={expense.electricity} total={expense.total}/>
   );

  return (
    <>
      <Navbar />
      <MainContainer />
      { MyExpensesList }
      <Footer />
    </>
  )
}

export default App
