import type { JSXElement } from "solid-js";
import { BlogList } from "@components/blog/BlogList";
import { Sidebar } from "@components/side/Sidebar";
import { Chat } from "@components/chat/Chat";

export const Main = (): JSXElement => {
  return (
    <main class="bg-white py-5">
      <Chat variant="warning" sm="3" lg="4" />
      <div class="container">
        <Chat variant="warning" sm="3" lg="4" />
        <div class="row gx-5">
          <div class="col-md-8">
            <Chat variant="warning" sm="3" md="2" lg="3" xxl="4" />
            <BlogList />
          </div>
          <div class="col-md-4">
            <Chat variant="warning" sm="3" md="2" xl="3" />
            <Sidebar />
          </div>
        </div>
      </div>
    </main>
  );
};
