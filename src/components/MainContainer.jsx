function MainContainer (props) {
    const { grocery, electricity, total } = props;

    let totalExpenseEvaluation;
    if (total > 1500) {
        totalExpenseEvaluation = <h3>You are Broke!</h3>
    } else {
        totalExpenseEvaluation = <h3>You have Saved!</h3>
    }


    return (
        <>
           <main className="bg-primary">
               <h1 className="text-center">My Expenses</h1>
               <div className="row">
                  <div className="col-sm-3">
                     <div className={`card ${total > 1500 ? 'bg-danger' : 'bg-success'}`}>
                         <div className="card-body">
                              <h5 className="card-title">Monday</h5>
                              <p>Grocery: <span>{grocery}</span></p>
                              <p>Electricity: <span>{electricity}</span></p>
                              <p>Total: <span>{total}</span></p> 
                              {totalExpenseEvaluation}
                        
                         </div>
                     </div>
                 </div>
                 <div className="col-sm-3">
                       <div className="card bg-warning">
                            <div className="card-body">
                               <h5 className="card-title">Tuesday</h5>
                               <p>Grocery: <span>{grocery}</span></p>
                               <p>Electricity: <span>{electricity}</span></p>
                          </div>
                     </div>
                 </div>
                 <div className="col-sm-3">
                      <div className="card bg-warning">
                          <div className="card-body">
                               <h5 className="card-title">Wednesday</h5>
                               <p>Grocery: <span>{grocery}</span></p>
                               <p>Electricity: <span>{electricity}</span></p>
                           </div>
                       </div>
                 </div>
                 <div className="col-sm-3">
                       <div className="card bg-warning">
                            <div className="card-body">
                               <h5 className="card-title">Thursday</h5>
                               <p>Grocery: <span>{grocery}</span></p>
                               <p>Electricity: <span>{electricity}</span></p>
                           </div>
                       </div>
                   </div>
               </div>
           </main>
        </>
    )
}

export default MainContainer