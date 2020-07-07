import React, { Component } from "react";

class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search for a Pet" aria-label="Search" aria-describedby="button-addon2"></input>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home? 
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home? 
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home? 
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home? 
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home? 
                                    </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <img src="placeholder-300x300.jpg"></img>
                                <p>
                                    Hi! I'm -NAMEHERE- and I'm a -SPECIES-. Specifically a -BREED-. I'm currently up for adoption! Will you bring me home?
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;