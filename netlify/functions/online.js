exports.handler = async (event) => {
    try {
        const { uid } = JSON.parse(event.body);

        const firebaseUrl =
            process.env.FIREBASE_URL +
            "/panel_users/" +
            uid +
            ".json";

        await fetch(firebaseUrl, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                status: "online",
                lastSeen: Date.now()
            })
        });

        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true
            })
        };
    } catch (e) {
        return {
            statusCode: 500,
            body: e.toString()
        };
    }
};
