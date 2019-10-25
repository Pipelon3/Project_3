import React from "react";
import "./home.css";

function SignIn() {
  return (
    <div>
      <br></br>

      <div class="signin-wrap">
        <div class="signin-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked />
          <label for="tab-1" class="tab">
            Sign In
          </label>
          <input id="tab-2" type="radio" name="tab" class="sign-up" />
          <label for="tab-2" class="tab">
            Sign Up
          </label>
          <div class="signin-form">
            <div class="sign-in-htm">
              <br></br>
              <div class="group">
                <label for="user" class="label">
                  E-mail
                </label>
                <input id="email_address" type="text" class="input" />
              </div>
              <div class="group">
                <label for="password" class="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <div class="group">
                <br></br>
                <input type="submit" class="button" value="Sign In" />
              </div>
              <div class="hr"></div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">
                  First Name
                </label>
                <input id="first_name" type="text" class="input" />
              </div>
              <div class="group">
                <label for="user" class="label">
                  Last Name
                </label>
                <input id="last_name" type="text" class="input" />
              </div>
              <div class="group">
                <label for="email_address" class="label">
                  Email Address
                </label>
                <input id="email_address" type="text" class="input" />
              </div>
              <div class="group">
                <label for="password" class="label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  class="input"
                  data-type="password"
                />
              </div>
              <label for="age">Age</label>
              <select id="age" class="form-control">
                <option selected hidden>
                  Select age group
                </option>
                <option>Child (00-14)</option>
                <option>Youth (15-24)</option>
                <option>Adults (25-64 years)</option>
                <option>Seniors (65 years and over)</option>
              </select>
              <label for="exampleInputGender">Gender</label>
              <select id="gender" class="form-control">
                <option selected hidden>
                  Select a Gender
                </option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <br></br>
              <div class="group">
                <input type="submit" class="button" value="Sign Up" />
              </div>

              <div class="hr"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;