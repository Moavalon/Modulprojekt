<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:a="http://tempuri.org/aRumble.xsd">
	<xsl:output method="html" encoding="UTF-8" indent="yes"/>

	<xsl:template match="/">
		<html>
			<head>
				<title>Helden</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
				<style>
					.held {
					display: none;
					}
					body {
					background-color: transparent;
					color: white;
					}
					.container {
					margin-top: 20px;
					}
					table.table {
					color: white;
					}
				</style>
				<script>
					function showHeld(index) {
					var helds = document.querySelectorAll('.held');
					helds.forEach(function(held) {
					held.style.display = 'none';
					});
					if (index) {
					document.querySelector('.held[data-held="' + index + '"]').style.display = 'block';
					}
					}
				</script>
			</head>
			<body>
				<div class="container p-xl-5">
					<h2 class="my-3 my-xl-5">Helden</h2>
					<select id="heldDropdown" class="form-control mb-3" onchange="showHeld(this.value)">
						<option value="">Wähle einen Helden</option>
						<xsl:for-each select="//a:Held">
							<option value="{position()}">
								<xsl:value-of select="a:Namen"/>
							</option>
						</xsl:for-each>
					</select>

					<div id="heldenDetails">
						<xsl:for-each select="//a:Held">
							<div class="held" data-held="{position()}">
								<h3 class="my-3 my-xl-5">
									<xsl:value-of select="a:Namen"/>
								</h3>
								<p>
									<strong>Fraktion: </strong>
									<xsl:value-of select="a:Fraktion"/>
								</p>
								<p>
									<strong>Kosten: </strong>
									<xsl:value-of select="a:Kosten"/>
								</p>
								<p>
									<strong>Angriffstempo: </strong>
									<xsl:value-of select="a:Angriffstempo"/>
								</p>
								<p>
									<strong>Tempo: </strong>
									<xsl:value-of select="a:Tempo"/>
								</p>
								<p>
									<strong class="mr-4">Eigenschaften: </strong>
									<xsl:for-each select="a:Eigenschaften">
										<span class="badge badge-primary mr-4">
											<xsl:value-of select="."/>
										</span>
									</xsl:for-each>
								</p>
								<table class="table table-bordered my-xl-5">
									<thead>
										<tr>
											<th>Level</th>
											<th>Schaden</th>
											<th>Schaden pro Sekunde</th>
											<th>Leben</th>
										</tr>
									</thead>
									<tbody>
										<xsl:for-each select="a:Werte">
											<tr>
												<td>
													<xsl:value-of select="a:Level"/>
												</td>
												<td>
													<xsl:value-of select="a:Schaden"/>
												</td>
												<td>
													<xsl:value-of select="a:SchadenProSekunde"/>
												</td>
												<td>
													<xsl:value-of select="a:Leben"/>
												</td>
											</tr>
										</xsl:for-each>
									</tbody>
								</table>
							</div>
						</xsl:for-each>
					</div>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
