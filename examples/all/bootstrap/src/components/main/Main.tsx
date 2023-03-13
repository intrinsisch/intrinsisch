import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Stat } from "@components/stat/Stat";
import { Rating } from "@components/rating/Rating";
import { Chat } from "@components/chat/Chat";

export const Main = (): JSXElement => {
  return (
    <main class="bg-white py-5">
      <Rating variant="warning" sm="3" lg="4" />
      <Chat />
      <Stat xs="vertical" sm="horizontal" />
      <div class="container">
        <Rating variant="warning" sm="3" lg="4" />
        <Chat />
        <Stat xs="vertical" sm="horizontal" />
        <div class="row gx-5">
          <div class="col-md-8">
            <Rating variant="warning" sm="3" md="2" lg="3" xxl="4" />
            <Chat />
            <Stat xs="vertical" sm="horizontal" />
            <BlogList />
          </div>
          <div class="col-md-4">
            <Rating variant="warning" sm="3" md="2" xl="3" />
            <Chat />
            <Stat xs="vertical" />
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
