"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((result) => {
        // * if you want to use json data
        // result.json();

        console.log(result);
      })
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <>
      <main>
        <div>hello world</div>
      </main>
    </>
  );
}
