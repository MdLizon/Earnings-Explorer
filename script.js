
function filterTable() {
    const filter = document.getElementById('filter').value;
    const rows = document.querySelectorAll('#comparisonTable tbody tr');

    rows.forEach(row => {
        if (filter === 'all' || row.dataset.investment === filter) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}
