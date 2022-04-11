import * as React from "react";
import Modal from "react-modal";
import { Radar } from "../components/Radar";
import { useRadarData } from "../hooks/useRadarData";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { Entry } from "../models/radar";
import { Login } from "../components/Login";
import { Layout } from "../components/Layout";
import "./index.css";

const isDev = () => {
  return process.env.NODE_ENV === "development";
};

const IndexPage = () => {
  const { quadrants, entries, rings } = useRadarData();
  const [selectedEntry, setSelectedEntry] = React.useState<Entry | null>(null);

  const handleEntryClick = React.useCallback(setSelectedEntry, []);

  const { logged } = useGoogleAuth({ buttonElementId: "googleLoginElement" });

  if (!logged && !isDev()) {
    return (
      <Layout>
        <Login />
      </Layout>
    );
  }

  function closeModal() {
    setSelectedEntry(null);
  }

  const isModalOpen = Boolean(selectedEntry);

  return (
    <Layout>
      <Modal
        ariaHideApp={false}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <h1>{selectedEntry?.label}</h1>
        {selectedEntry ? (
          <div dangerouslySetInnerHTML={{ __html: selectedEntry.html }} />
        ) : null}
        <hr />
        <div>
          <a
            href="https://github.com/boldare/boldare-radar/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            Suggest changes
          </a>
        </div>
      </Modal>
      <Radar
        handleEntryClick={handleEntryClick}
        quadrants={quadrants}
        entries={entries}
        rings={rings}
      />
    </Layout>
  );
};

export default IndexPage;
