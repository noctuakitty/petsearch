app.post ("/login", checkNotAuthenticated, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  }))
  
  //Post Routes
  app.post ("/register", async(req,res) => {
    try{
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
      })
      res.redirect("/login")
    }catch{
      res.redirect("/register")
    }
  console.log(users)
  });
  
  //Get Routes
  app.get("/", checkAuthenticated, (req,res)  =>{
    res.render("index.ejs",{ name: req.user.name})
  });
  
  app.get ("/login", checkNotAuthenticated,(req,res) => {
    res.render("login.ejs")
  });
  
  app.get ("/register", checkNotAuthenticated, (req,res) => {
    res.render("register.ejs")
  });
  
  app.delete("/logout", (req, res)=> {
    req.logOut()
    res.redirect("/login")
  });
  