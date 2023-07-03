$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Include/features/User Profile.feature");
formatter.feature({
  "name": "Web User Profile",
  "description": "  As a User, I want to edit profile in Secondhand Webstore",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@editprofile"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify to edit profile with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@USR01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.step({
  "name": "User input Nama Profile with \u003cnama\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User set Kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User input Alamat Profile with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User input No Handphone with \u003cnoHP\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.step({
  "name": "User verify edit profile: \u003cstatus\u003e",
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
        "kota",
        "alamat",
        "noHP",
        "status"
      ]
    },
    {
      "cells": [
        "Kelompok",
        "Jakarta",
        "Jl. Sumatera 21",
        "0811122229911",
        "success"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to edit profile with valid data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofile"
    },
    {
      "name": "@USR01"
    },
    {
      "name": "@Positive"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.match({
  "location": "profile.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.match({
  "location": "profile.user_uploadProfilePhoto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Profile with Kelompok",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNamaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User set Kota with Jakarta",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_setKotaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Alamat Profile with Jl. Sumatera 21",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputAlamatProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input No Handphone with 0811122229911",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNoHP_Profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_clickSimpan_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify edit profile: success",
  "keyword": "Then "
});
formatter.match({
  "location": "profile.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify to edit profile with \u003cstatus\u003e",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@USR02"
    },
    {
      "name": "@USR03"
    },
    {
      "name": "@USR04"
    },
    {
      "name": "@USR05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.step({
  "name": "User input Nama Profile with \u003cnama\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User set Kota with \u003ckota\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User input Alamat Profile with \u003calamat\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User input No Handphone with \u003cnoHP\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.step({
  "name": "User verify edit profile: \u003cstatus\u003e",
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
        "kota",
        "alamat",
        "noHP",
        "status"
      ]
    },
    {
      "cells": [
        "empty",
        "Jakarta",
        "Jl. Sumatera 21",
        "0811122229911",
        "empty nama"
      ]
    },
    {
      "cells": [
        "Kelompok 1",
        "empty",
        "Jl. Sumatera 22",
        "0811122229911",
        "empty kota"
      ]
    },
    {
      "cells": [
        "Kelompok 10",
        "Solo",
        "empty",
        "0811122229911",
        "empty alamat"
      ]
    },
    {
      "cells": [
        "Kelompok 100",
        "Bandung",
        "Jl. Sumatera 23",
        "empty",
        "empty handphone"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify to edit profile with empty nama",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofile"
    },
    {
      "name": "@USR02"
    },
    {
      "name": "@USR03"
    },
    {
      "name": "@USR04"
    },
    {
      "name": "@USR05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.match({
  "location": "profile.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.match({
  "location": "profile.user_uploadProfilePhoto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Profile with empty",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNamaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User set Kota with Jakarta",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_setKotaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Alamat Profile with Jl. Sumatera 21",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputAlamatProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input No Handphone with 0811122229911",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNoHP_Profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_clickSimpan_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify edit profile: empty nama",
  "keyword": "Then "
});
formatter.match({
  "location": "profile.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to edit profile with empty kota",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofile"
    },
    {
      "name": "@USR02"
    },
    {
      "name": "@USR03"
    },
    {
      "name": "@USR04"
    },
    {
      "name": "@USR05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.match({
  "location": "profile.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.match({
  "location": "profile.user_uploadProfilePhoto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Profile with Kelompok 1",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNamaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User set Kota with empty",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_setKotaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Alamat Profile with Jl. Sumatera 22",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputAlamatProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input No Handphone with 0811122229911",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNoHP_Profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_clickSimpan_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify edit profile: empty kota",
  "keyword": "Then "
});
formatter.match({
  "location": "profile.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to edit profile with empty alamat",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofile"
    },
    {
      "name": "@USR02"
    },
    {
      "name": "@USR03"
    },
    {
      "name": "@USR04"
    },
    {
      "name": "@USR05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.match({
  "location": "profile.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.match({
  "location": "profile.user_uploadProfilePhoto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Profile with Kelompok 10",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNamaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User set Kota with Solo",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_setKotaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Alamat Profile with empty",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputAlamatProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input No Handphone with 0811122229911",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNoHP_Profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_clickSimpan_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify edit profile: empty alamat",
  "keyword": "Then "
});
formatter.match({
  "location": "profile.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify to edit profile with empty handphone",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@editprofile"
    },
    {
      "name": "@USR02"
    },
    {
      "name": "@USR03"
    },
    {
      "name": "@USR04"
    },
    {
      "name": "@USR05"
    },
    {
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "name": "User already login to the web and on the Edit Profile Page",
  "keyword": "Given "
});
formatter.match({
  "location": "profile.user_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User upload image with valid file type",
  "keyword": "When "
});
formatter.match({
  "location": "profile.user_uploadProfilePhoto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Nama Profile with Kelompok 100",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNamaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User set Kota with Bandung",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_setKotaProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input Alamat Profile with Jl. Sumatera 23",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputAlamatProfile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input No Handphone with empty",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_inputNoHP_Profile(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Simpan button to submit",
  "keyword": "And "
});
formatter.match({
  "location": "profile.user_clickSimpan_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verify edit profile: empty handphone",
  "keyword": "Then "
});
formatter.match({
  "location": "profile.user_input_nama(String)"
});
formatter.result({
  "status": "passed"
});
});