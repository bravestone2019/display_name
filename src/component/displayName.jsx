function displayName () {
return (
    <div>
        <h2>Full Name Display</h2>
        {/* <h3><span>First Name:<input/></span></h3>
        <span><h3>Last Name:<input/></h3></span>
        <button>Submit</button> */}
         <form>
        <div>
          <label>
            First Name:
            <input 
              type="text" 
            //   value={firstName} 
            //   onChange={(e) => setFirstName(e.target.value)} 
            />
          </label>
        </div>
        <div style={{ marginTop: '0px' }}>
          <label>
            Last Name:
            <input 
              type="text" 
            //   value={lastName} 
            //   onChange={(e) => setLastName(e.target.value)} 
            />
          </label>
        </div>
        <div style={{ marginTop: '0px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
);
}

export default displayName;