import * as React from "react";
import { navigate } from "gatsby";
import Modal from "react-modal";
import { Radar } from "../components/Radar";
import { useRadarData } from "../hooks/useRadarData";
import { useGoogleAuth } from "../hooks/useGoogleAuth";
import { Entry } from "../models/radar";
import { Login } from "../components/Login";
import "./index.css";

const IndexPage = () => {
  const { quadrants, entries, rings } = useRadarData();
  const [selectedEntry, setSelectedEntry] = React.useState<Entry | null>(null);

  const handleEntryClick = React.useCallback(setSelectedEntry, []);

  const { logged } = useGoogleAuth({ buttonElementId: "googleLoginElement" });

  if (!logged) {
    return <Login />;
  }

  function closeModal() {
    setSelectedEntry(null);
  }

  const isModalOpen = Boolean(selectedEntry);

  return (
    <main>
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
    </main>
  );
};

export default IndexPage;
