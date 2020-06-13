import React from 'react';

export default function BirthdayForm() {
  return (
    <div className="birthday-form">
        <p>Add a birthday: make a post request to the backend</p>
        <form>
            <input name="name" placeholder="name"/>
            <input name="currentAge" placeholder="current age"/>
            <input name="birthday" placeholder="birthday"/>
            <input type="submit" value="Submit!"/>
        </form>
    </div>
  );
}