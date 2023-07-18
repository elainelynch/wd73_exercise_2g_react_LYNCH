function MainContainer () {
    return (
        <>
           <main className="bg-primary">
               <h1 className="text-center">My Expenses</h1>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="card bg-warning">
                         <div className="card-body">
                              <h5 className="card-title">Monday</h5>
                         </div>
                     </div>
                 </div>
                 <div className="col-sm-3">
                       <div className="card bg-warning">
                            <div className="card-body">
                               <h5 className="card-title">Tuesday</h5>
                          </div>
                     </div>
                 </div>
                 <div className="col-sm-3">
                      <div className="card bg-warning">
                          <div className="card-body">
                               <h5 className="card-title">Wednesday</h5>
                           </div>
                       </div>
                 </div>
                 <div className="col-sm-3">
                       <div className="card bg-warning">
                            <div className="card-body">
                               <h5 className="card-title">Thursday</h5>
                           </div>
                       </div>
                   </div>
               </div>
           </main>
        </>
    )
}

export default MainContainer