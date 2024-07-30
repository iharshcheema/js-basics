function register(callback) {
  setTimeout(() => {
    console.log('User registered')
    callback()
  }, 3000)
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log('Email sent')
    callback()
  }, 1000)
}

function login(callback) {
  setTimeout(() => {
    console.log('User logged in successfully')
    callback()
  }, 4000)
}

function getUserData(callback) {
  setTimeout(() => {
    console.log('Got user data')
    callback()
  }, 1000)
}

function displayUserData() {
  setTimeout(() => {
    console.log('User data displayed')
  }, 1000)
}

// Callback hell
register(() => {
  sendEmail(() => {
    login(() => {
      getUserData(() => {
        displayUserData()
      })
    })
  })
})
