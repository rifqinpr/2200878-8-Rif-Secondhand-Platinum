$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/Register.feature");
formatter.feature({
  "name": "Android User Register",
  "description": "  As a user, I want to register in Secondhand Store app.",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify to register using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input nama for register \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input email for register \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input password for register \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input nomor hp with \u003cnomor_hp\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step: \u003cstatus\u003e for register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "nomor_hp",
        "kota",
        "alamat",
        "status"
      ]
    },
    {
      "cells": [
        "random",
        "random",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 1",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register using valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register random",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register random",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: success for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register using invalid email: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input nama for register \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input email for register \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input password for register \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input nomor hp with \u003cnomor_hp\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step: \u003cstatus\u003e for register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "nomor_hp",
        "kota",
        "alamat",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "Group Satu",
        "groupsatu@gmail.com",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 1",
        "registered",
        "already registered"
      ]
    },
    {
      "cells": [
        "John Doe",
        "groupsatuyahoo.id",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 1",
        "invalid email",
        "without @"
      ]
    },
    {
      "cells": [
        "Alan Kruss",
        "groupsatu@mail",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 1",
        "invalid email",
        "non-TLD"
      ]
    },
    {
      "cells": [
        "Charlotte",
        "empty",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 3",
        "empty email",
        "empty email"
      ]
    },
    {
      "cells": [
        "Mia Clark",
        "@rocketmail.com",
        "abc!12345",
        "088811223344",
        "Sby",
        "Jln. Raya 3",
        "invalid email",
        "without email name"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register using invalid email: already registered",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Group Satu",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register groupsatu@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: registered for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register using invalid email: without @",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register John Doe",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register groupsatuyahoo.id",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: invalid email for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register using invalid email: non-TLD",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Alan Kruss",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register groupsatu@mail",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: invalid email for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register using invalid email: empty email",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Charlotte",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 3",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty email for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register using invalid email: without email name",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG02"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Mia Clark",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register @rocketmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Sby",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 3",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: invalid email for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input nama for register \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input email for register \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input password for register \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input nomor hp with \u003cnomor_hp\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step: \u003cstatus\u003e for register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "nomor_hp",
        "kota",
        "alamat",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty",
        "empty nama"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register without enter any data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG03"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register empty",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty nama for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register with invalid password: \u003ccondition\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input nama for register \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input email for register \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input password for register \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input nomor hp with \u003cnomor_hp\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step: \u003cstatus\u003e for register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "nomor_hp",
        "kota",
        "alamat",
        "status",
        "condition"
      ]
    },
    {
      "cells": [
        "Group Satu",
        "kurangdari6@mail.com",
        "45a!",
        "088811223344",
        "Surabaya",
        "Jln. Raya 1",
        "invalid pass",
        "less than 6 characters"
      ]
    },
    {
      "cells": [
        "Group Dua",
        "emptypass@test.com",
        "empty",
        "088811223344",
        "Malang",
        "Jln. Raya 3",
        "empty password",
        "empty password"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register with invalid password: less than 6 characters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Group Satu",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register kurangdari6@mail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register 45a!",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Surabaya",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: invalid pass for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register with invalid password: empty password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG04"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Group Dua",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register emptypass@test.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Malang",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 3",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty password for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to register by leaving one field empty: \u003cstatus\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.step({
  "name": "I input nama for register \u003cnama\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I input email for register \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input password for register \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input nomor hp with \u003cnomor_hp\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I input alamat with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see the next step: \u003cstatus\u003e for register",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "nama",
        "email",
        "password",
        "nomor_hp",
        "kota",
        "alamat",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "namakosong@mail.com",
        "abc!12345",
        "088811223344",
        "Denpasar",
        "Jln. Raya 1",
        "empty nama"
      ]
    },
    {
      "cells": [
        "John Doe",
        "hpkosong@mail.com",
        "abc!12345",
        "empty",
        "Denpasar",
        "Jln. Raya 1",
        "empty hp"
      ]
    },
    {
      "cells": [
        "Alan Kruss",
        "kotakosong@mail.com",
        "abc!12345",
        "088811223344",
        "empty",
        "Jln. Raya 1",
        "empty kota"
      ]
    },
    {
      "cells": [
        "Charlotte",
        "alamatkosong@mail.com",
        "abc!12345",
        "088811223344",
        "Denpasar",
        "empty",
        "empty alamat"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to register by leaving one field empty: empty nama",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register empty",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register namakosong@mail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Denpasar",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty nama for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register by leaving one field empty: empty hp",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register John Doe",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register hpkosong@mail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Denpasar",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty hp for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register by leaving one field empty: empty kota",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Alan Kruss",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register kotakosong@mail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with Jln. Raya 1",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty kota for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to register by leaving one field empty: empty alamat",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    },
    {
      "name": "@REG05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "I already installed the app and on the register page",
  "keyword": "Given "
});
formatter.match({
  "location": "Register.i_already_installed_the_app_and_on_the_register_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nama for register Charlotte",
  "keyword": "When "
});
formatter.match({
  "location": "Register.i_input_namareg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input email for register alamatkosong@mail.com",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_emailreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input password for register abc!12345",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_passwordreg_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input nomor hp with 088811223344",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_nomor_hp_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input kota with Denpasar",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_kota_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I input alamat with empty",
  "keyword": "And "
});
formatter.match({
  "location": "Register.i_input_alamat_with(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click Register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.iclickregisterbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the next step: empty alamat for register",
  "keyword": "Then "
});
formatter.match({
  "location": "Register.i_should_see_the_next_step_for_register(String)"
});
formatter.result({
  "status": "passed"
});
});