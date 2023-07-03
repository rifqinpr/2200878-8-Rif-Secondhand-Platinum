$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Login.feature");
formatter.feature({
  "name": "Android User Login",
  "description": "  As a user, I want to login in Secondhand Store app",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "abc!12345",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step success",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login using invalid email: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "unregistered@gmail.com",
        "12345678",
        "incorrect",
        "unregistered email"
      ]
    },
    {
      "cells": [
        "groupsatuuuu@gmail.com",
        "12345678",
        "incorrect",
        "wrong email"
      ]
    },
    {
      "cells": [
        "empty",
        "12345678",
        "empty email",
        "empty email"
      ]
    },
    {
      "cells": [
        "groupsatu@yahoo",
        "12345678",
        "invalid",
        "non-tld email"
      ]
    },
    {
      "cells": [
        "namaku1357.com",
        "abc!12345",
        "invalid",
        "without @"
      ]
    },
    {
      "cells": [
        "namaku1357gmail",
        "abc!12345",
        "invalid",
        "without @ and without tld"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login using invalid email: unregistered email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with unregistered@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login using invalid email: wrong email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatuuuu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login using invalid email: empty email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with empty",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step empty email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login using invalid email: non-tld email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatu@yahoo",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with 12345678",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login using invalid email: without @",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with namaku1357.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login using invalid email: without @ and without tld",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN02"
    },
    {
      "name": "@LGN05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with namaku1357gmail",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login without enter any data into the fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "empty",
        "empty email"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login without enter any data into the fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with empty",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step empty email",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to login with correct email and incorrect password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input email with \u003cemail\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input password with \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "status"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "abc!!!22",
        "incorrect"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "a12q",
        "invalid pass"
      ]
    },
    {
      "cells": [
        "groupsatu@gmail.com",
        "empty",
        "empty password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to login with correct email and incorrect password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with abc!!!22",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step incorrect",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with correct email and incorrect password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with a12q",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step invalid pass",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to login with correct email and incorrect password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    },
    {
      "name": "@LGN04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already register an account and on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.i_already_register_an_account_and_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email with groupsatu@gmail.com",
  "keyword": "When "
});
formatter.match({
  "location": "Login.i_input_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_input_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I tap Masuk button",
  "keyword": "And "
});
formatter.match({
  "location": "Login.i_tap_Masuk_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step empty password",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.i_should_see_the_next_step(String)"
});
formatter.result({
  "status": "passed"
});
});