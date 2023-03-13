
export const LoadingMessage = ({isLoading}) => {
    
  return (
    <>
    <div>
    { isLoading && (<div className="lds-ring"><div></div><div></div><div></div><div></div></div>) }
    </div>
    </>
  )
}
